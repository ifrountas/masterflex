<?php require_once( 'head.php' ) ?>

<!-- PAGE HEADER -->

<section class="top__header bg__black">
	<div class="social">
		<?php echo skyrocket_get_social_media(); ?>
	</div>
</section>

<header class="main__header bg__blue">

	<div class="container-fluid">

		<div class="row middle-sm">

			<div class="col-sm-12 col-mob-3 col-lap-4">
				<div class="site-logo">
					<?php echo myfirsttheme_display_site_title(); ?>
	            </div>
			</div>
			
			<div class="col-sm-12 col-mob-9 col-lap-8">

				<nav class="navigation horizontal__nav" aria-label="<?php _e( 'Main navigation', 'myfirsttheme' ); ?>">
					<?php
			            wp_nav_menu( array(
			                'theme_location' => 'main-navigation',
			                'container'      => 'div',
			                'menu_class'     => 'main-navigation',
			                'menu_id'        => 'main-navigation',
			            ));
			        ?>
			        <div class="burger">
			        	<div class="line1 bg__white"></div>
			        	<div class="line2 bg__white"></div>
			        	<div class="line3 bg__white"></div>
			        </div>
				</nav>

			</div>

		</div>

	</div>

</header>