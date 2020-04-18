<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
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
	
		<a href="#" class="btn">READ MORE</a>

		<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
			<div class="modal__overlay" tabindex="-1" data-custom-close>
				<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
					<header class="modal__header">
						<h2 class="modal__title" id="modal-1-title">Micromodal</h2>
						<button class="modal__close" aria-label="Close modal" data-custom-close></button>
					</header>
					<main class="modal__content" id="modal-1-content">
						<p>Try hitting the <code>tab</code> key and notice how the focus stays within the modal itself. Also, <code>esc</code> to close modal.</p>
					</main>
					<footer class="modal__footer">
						<button class="modal__btn modal__btn-primary">Continue</button>
						<button class="modal__btn" data-custom-close aria-label="Close this dialog window">Close</button>
					</footer>
				</div>
			</div>
		</div>

		<a class="btn" data-custom-open="modal-1">OPEN MODAL</a>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
