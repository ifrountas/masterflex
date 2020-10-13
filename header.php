<?php require_once( 'head.php' ) ?>

<!-- PAGE HEADER -->

<section class="top__header bg__black">
	<div class="container-fluid">
		<div class="row middle-sm">
			<div class="col-sm-12 social">
				<p><?php _e('Time Schedule', 'myfirsttheme'); ?></p>
			</div>
		</div>
	</div>
</section>

<header class="main__header bg__blue">

	<div class="container-fluid">

		<div class="row middle-sm">

			<div class="col-sm-9 col-lap-4">
				<div class="site-logo">
					<?php echo myfirsttheme_display_site_title(); ?>
	            </div>
			</div>
			
			<div class="col-sm-3 col-lap-8">

				<nav id="main-menu" class="navigation responsive-menu horizontal__nav mainmenu" aria-label="<?php _e( 'Main navigation', 'myfirsttheme' ); ?>">
					<?php
			            wp_nav_menu( array(
			                'theme_location' => 'main-navigation',
			                'container'      => 'div',
			                'menu_class'     => 'main-navigation',
			                'menu_id'        => 'main-navigation',
			            ));
			        ?>
				</nav>

				<div class="burger-menu">
					<div class="line line-1"></div>
					<div class="line line-2"></div>
					<div class="line line-3"></div>
				</div>

			</div>

		</div>

	</div>

</header>