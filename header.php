<?php require_once( 'head.php' ) ?>

<!-- PAGE HEADER -->

<header class="main__header bg__blue">

	<div class="container-fluid">

		<div class="row middle-sm">

			<div class="col-sm-9 col-lap-4">
				<div class="site-logo" data-beat="1" data-beat-topper="1">
					<?php echo myfirsttheme_display_site_title(); ?>
	            </div>
			</div>
			
			<div class="col-sm-3 col-lap-8">

				<nav id="main-menu" class="navigation responsive-menu horizontal__nav mainmenu" aria-label="<?php _e( 'Main navigation', 'myfirsttheme' ); ?>" data-beat="2" data-beat-topper="2">
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