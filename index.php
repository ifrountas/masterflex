<?php
/**
 * The main template file
 *
 * @package myfirsttheme
 */

get_header();
?>

	<div id="primary" class="content-area container">
		<main id="main" class="site-main col-sm-12">
			
		<?php
		if ( have_posts() ) :

			if ( is_home() && ! is_front_page() ) :
				?>
				<header class="entry-header">
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>
				<?php
			endif;

			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_type() );

			endwhile;

			the_posts_navigation();
			do_action('myfirsttheme_after_pagination');
			

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>

		<div class="slideshow">
			<img src="https://cdn.pixabay.com/photo/2020/04/03/15/27/flower-meadow-4999277_1280.jpg"/>
			<img src="https://cdn.pixabay.com/photo/2020/03/18/05/29/swimming-pool-4942724_1280.jpg"/>
		</div>

		<button class="slide-prev btn small red">prev</button>
		<button class="slide-next btn small red">next</button>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
