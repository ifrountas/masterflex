<?php

// Fire all our initial functions at the start
add_action('after_setup_theme','myfirsttheme_start', 16);

function myfirsttheme_start() {

    // launching operation cleanup
    add_action('init', 'myfirsttheme_head_cleanup');

    // remove pesky injected css for recent comments widget
    add_filter( 'wp_head', 'myfirsttheme_remove_wp_widget_recent_comments_style', 1 );

    // clean up comment styles in the head
    add_action('wp_head', 'myfirsttheme_remove_recent_comments_style', 1);

    // clean up gallery output in wp
    add_filter('gallery_style', 'myfirsttheme_gallery_style');

    // cleaning up excerpt
    add_filter('excerpt_more', 'myfirsttheme_excerpt_more');

} /* end myfirsttheme start */

// The default wordpress head is a mess. Let's clean it up by removing all the junk we don't need.
function myfirsttheme_head_cleanup() {
	// Remove category feeds
	// remove_action( 'wp_head', 'feed_links_extra', 3 );
	// Remove post and comment feeds
	// remove_action( 'wp_head', 'feed_links', 2 );
	// Remove EditURI link
	remove_action( 'wp_head', 'rsd_link' );
	// Remove Windows live writer
	remove_action( 'wp_head', 'wlwmanifest_link' );
	// Remove index link
	remove_action( 'wp_head', 'index_rel_link' );
	// Remove previous link
	remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );
	// Remove start link
	remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );
	// Remove links for adjacent posts
	remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
	// Remove WP version
	remove_action( 'wp_head', 'wp_generator' );
} /* end myfirsttheme head cleanup */

// Remove injected CSS for recent comments widget
function myfirsttheme_remove_wp_widget_recent_comments_style() {
	if ( has_filter('wp_head', 'wp_widget_recent_comments_style') ) {
		remove_filter('wp_head', 'wp_widget_recent_comments_style' );
	}
}

// Remove injected CSS from recent comments widget
function myfirsttheme_remove_recent_comments_style() {
	global $wp_widget_factory;
	if (isset($wp_widget_factory->widgets['WP_Widget_Recent_Comments'])) {
		remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
	}
}

// Remove injected CSS from gallery
function myfirsttheme_gallery_style($css) {
	return preg_replace("!<style type='text/css'>(.*?)</style>!s", '', $css);
}

// This removes the annoying […] to a Read More link
function myfirsttheme_excerpt_more($more) {
	global $post;
	// edit here if you like
	return '<a class="excerpt-read-more" href="'. get_permalink($post->ID) . '" title="'. __('Read', 'myfirstthemewp') . get_the_title($post->ID).'">'. __('... Read more &raquo;', 'myfirstthemewp') .'</a>';
}

// This is a modified the_author_posts_link() which just returns the link. This is necessary to allow usage of the usual l10n process with printf()
function myfirsttheme_get_the_author_posts_link() {
	global $authordata;
	if ( !is_object( $authordata ) )
		return false;
	$link = sprintf(
		'<a href="%1$s" title="%2$s" rel="author">%3$s</a>',
		get_author_posts_url( $authordata->ID, $authordata->user_nicename ),
		esc_attr( sprintf( __( 'Posts by %s', 'myfirstthemewp' ), get_the_author() ) ), // No further l10n needed, core will take care of this one
		get_the_author()
	);
	return $link;
}


function myfirsttheme_disable_wp_emoji() {

	// all actions related to emojis
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );

	// filter to remove TinyMCE emojis
	add_filter( 'tiny_mce_plugins', 'myfirsttheme_disable_emoji_tinymce' );

	// filter to remove DNS prefetch
	add_filter( 'emoji_svg_url', '__return_false' );

}

add_action( 'init', 'myfirsttheme_disable_wp_emoji' );

function myfirsttheme_disable_emoji_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
		return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
		return array();
	}
}

?>