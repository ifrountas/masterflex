<?php

	class ILNEWS_Layout_Sticky_Posts {

	    public $classes = array( 'sticky-posts', 'spacer' );
	    public $sticky = null;
		public $num_posts = null;
		public $sticky_posts = null;
		public $counter = 0;

	    public function __construct( array $layout_fields=null ) {

	    	$this->classes = implode(' ', $this->classes);

	        if( $layout_fields == null ) {
        		$this->sticky = get_option( 'sticky_posts' );
           		$this->num_posts = get_sub_field('how_many_sticky_posts_to_display');
	        }

	    	$sticky_args = array(
				'posts_per_page'      => $this->num_posts,
				'post__in'            => $this->sticky,
				'ignore_sticky_posts' => 1
	    	);

   			$this->sticky_posts = new WP_Query($sticky_args);
	    }

     	/**
         * Return the output of the layout's HTML as a string.
         * 
         * @return void
         */
        public function __toString() {

            ob_start();
            $this->layout();
            $output = ob_get_clean();

            return $output;
        }

	    public function layout() { ?>
	        
	        <!--
	        ================================================================================
	        #
	        #   STICKY POSTS
	        #
	        ================================================================================
	        --> 

            <section class="<?php echo $this->classes; ?>">
                <div class="container">
                    <div class="row">      
                	    <?php global $post;
            	    		if($this->sticky_posts->have_posts()) : setup_postdata( $post );
				      			while($this->sticky_posts->have_posts()) : 
				         			$this->sticky_posts->the_post();
				         			$this->counter++;
				         			// Gather the first post
				         			if ( 1 == $this->counter ){
				         				echo '<div class="col-sm-12">';
				         					get_template_part('template-parts/modules/featured-post');
				         				echo '</div>';
				         			}elseif( $this->num_posts > 1 && $this->counter <= $this->num_posts ){
				         				echo '<div class="col-sm-12 col-tab-6 col-lap-3">';
				         					get_template_part('template-parts/modules/mini-post');
				         				echo '</div>';
				         			}
				         		endwhile; wp_reset_postdata();
				         	endif;
				        ?>
                    </div>
                </div>
            </section>

	    	<?php
	    }


	}