<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package myfirsttheme
 */

get_header();
?>
	<div id="primary" class="container">
		<div class="row">
			<main id="main" class="site-main col-sm-12">

			<?php
			while ( have_posts() ) :
				the_post();

				get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

			</main><!-- #main -->
			<div class="col-sm-12 grid__box">
				<p class="color__white">Something special</p>
			</div>
			<div class="col-sm-6 col-mob-6 col-tab-4 col-lap-9 col-lg-3 col-xl-3 grid__box">
				<p class="color__white">One of four columns</p>
			</div>
			<div class="col-sm-6 col-mob-6 col-tab-4 col-lap-9 col-lg-3 col-xl-3 grid__box">
				<p class="color__white">One of four columns</p>
			</div>
			<div class="col-sm-6 col-mob-6 col-tab-4 col-lap-9 col-lg-3 col-xl-3 grid__box">
				<p class="color__white">One of four columns</p>
			</div>
			<div class="col-sm-6 col-mob-6 col-tab-8 col-lap-3 col-lg-9 col-xl-3 grid__box">
				<p class="color__white">One of four columns</p>
			</div>
		</div>
	</div><!-- #primary -->

<?php
get_footer();