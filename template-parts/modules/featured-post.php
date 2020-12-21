<section class="sticky__main is-rel bg__black">
	<a href="<?php echo get_the_permalink(); ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
		<div class="sticky__main-wrapper is-rel">
			<div class="text-wrapper">
				<div class="is-rel block">
					<h3 class="cat_head mb-10 bg__orange">
						<span class="inner color__black"><?php echo ilnews_get_post_category(); ?></span>
					</h3>
				</div>
				<h2 class="title left mb-10 color__white"><?php echo get_the_title(); ?></h2>
				<p class="subtitle left color__white"><?php echo get_the_excerpt(); ?></p>
			</div>
			<?php if ( has_post_thumbnail() ) : ?>
				<div class="image is-rel">
					<?php the_post_thumbnail('mvp-post-thumb'); ?>
				</div>
			<?php endif; ?>
		</div>
	</a>
</section>