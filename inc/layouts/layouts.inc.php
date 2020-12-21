<?php

    /**
     * Include all layout files.
     */
    require_once( 'inc/ad.php' );
    require_once( 'inc/sticky-posts.php' );
    // require_once( 'inc/accordion.php' );
    // require_once( 'inc/cards.php' );
    // require_once( 'inc/columns-text-single.php' );
    // require_once( 'inc/columns-text-two.php' );
    // require_once( 'inc/columns-text-three.php' );
    // require_once( 'inc/columns-text-four.php' );
    // require_once( 'inc/divider.php' );
    // require_once( 'inc/embed.php' );
    // require_once( 'inc/error.php' );
    // require_once( 'inc/gallery.php' );
    // require_once( 'inc/image.php' );
    // require_once( 'inc/map.php' );
    // require_once( 'inc/main.php' );
    // require_once( 'inc/points.php' );
    // require_once( 'inc/popup.php' );
    // require_once( 'inc/posts-list.php' );
    // require_once( 'inc/quote.php' );
    // require_once( 'inc/quote-image.php' );
    // require_once( 'inc/slideshow.php' );
    // require_once( 'inc/slideshow-image.php' );
    // require_once( 'inc/slideshow-text.php' );
    // require_once( 'inc/table.php' );
    // require_once( 'inc/tabs.php' );
    // require_once( 'inc/text-image-left.php' );
    // require_once( 'inc/text-image-right.php' );



    /**
     * Returns 
     * 
     * @return array An associative array of layout slugs and the corresponding
     *               classes that handle each layout.
     */
    function ilnews_get_registered_layouts() {

        return array(
            'ad'            => 'ILNEWS_Layout_Ad',
            'sticky_posts'  => 'ILNEWS_Layout_Sticky_Posts',
        );

    }


    
    /**
     * Outputs all the layouts registered for a given post as an ACF layouts
     * repeater. It is meant as a replacement of the `the_content`. Tt outputs
     * the main content of the post as well. Must be used within the WordPress
     * posts loop.
     *
     * @param int $post_ID The post show layouts to show. 
     * 
     * @return void
     */
    function ilnews_layouts_the_layouts( $post_ID=null ) {

        if ( $post_ID ) {
            global $post;
            $post = get_post( $post_ID );
            setup_postdata( $post );
        }

        // Then iterate over all registered layouts.
        if( have_rows( 'layouts' ) ) {

            while ( have_rows( 'layouts' ) ) {

                the_row();

                $layout_slug  = get_row_layout();
                $layouts      = ilnews_get_registered_layouts();

                if( isset( $layouts[$layout_slug] ) ) {

                    $layout_class = $layouts[$layout_slug];

                    // Output the corresponding layout.
                    echo new $layout_class();

                } else {

                    echo "<h1>BRO YOU DO NOT HAVE LAYOUTS</h1>";

                }

            }

        }

        if ( $post_ID ) {
            wp_reset_postdata(); 
        }
 
    }