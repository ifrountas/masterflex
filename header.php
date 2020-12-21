<?php require_once( 'head.php' ) ?>

<?php echo ilnews_get_header_ad(); ?>

<!-- PAGE HEADER -->

<header class="main__header is-rel bg__white">

	<div class="container">

		<div class="row middle-sm brd-bt is-rel">

			<div class="hidden-sm block-lap col-lap-4 col-des-3">
				<div class="social__media-header">
					<?php echo ilnews_get_social_media(); ?>
	            </div>
			</div>

			<div class="col-sm-9 col-lap-6">
				<div class="site-logo">
					<?php echo ilnews_display_site_title(); ?>
	            </div>
			</div>

			<div class="hidden-sm block-lap col-lap-2 col-des-3 social__image-header">
				<?php echo ilnews_get_header_image(); ?>
			</div>

			<div class="burger-menu">
				<div class="line line-1"></div>
				<div class="line line-2"></div>
				<div class="line line-3"></div>
			</div>
			
		</div>

		<div class="row middle-sm border is-rel">

			<div class="col-sm-3 col-lap-11 col-des-offset-1 col-des-10">

				<nav id="main-menu" class="navigation responsive-menu horizontal__nav mainmenu" aria-label="<?php _e( 'Main navigation', 'ilnews' ); ?>">
					<?php
			            wp_nav_menu( array(
			                'theme_location' => 'main-navigation',
			                'container'      => 'div',
			                'menu_class'     => 'main-navigation',
			                'menu_id'        => 'main-navigation',
			            ));
			        ?>
				</nav>

			</div>

			<div class="hidden-sm block-lap col-lap-1 search__bar text-right">
				<span class="icofont-search-1" data-custom-open="modal-search"></span>
			</div>

		</div>

	</div>

</header>

<?php echo ilnews_get_the_alert_post(); ?>