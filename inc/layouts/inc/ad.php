<?php

	class ILNEWS_Layout_Ad {

	    public $classes = array( 'home-ad', 'spacer' );
	    public $ad_type  = null;
	    public $single_ad_code = null;
	    public $group_ad = null;
	    public $ad_sense = null;
	    public $ad_bg = null;

	    public function __construct( array $layout_fields=null ) {

	    	$this->classes = implode(' ', $this->classes);

	        if( $layout_fields == null ) {
	            $this->ad_type = get_sub_field( 'ad_type' );
	            $this->single_ad_code = adsanity_show_ad(array( 'align' => 'aligncenter', 'post_id' => get_sub_field('single_ad_code'), 'return' => true));
	            $this->group_ad = get_sub_field('group_ad');
	            $this->ad_sense = get_sub_field('adsense_code');
	            $this->ad_bg = (get_sub_field('ad_background_color')) ? 'style="background-color:'.get_sub_field('ad_background_color').'"' : 'style="background-color:#f4f4f4;"';
	        }
	    }

	    public function ad_type() {

	    	if ('single_ad' == $this->ad_type){
	    		return $this->single_ad_code;
	    	}elseif('ad_group' == $this->ad_type){
	    		return do_shortcode($this->group_ad);
	    	}elseif('ad_sense' == $this->ad_type){
	    		return $this->ad_sense;
	    	}
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
	        #   AD
	        #
	        ================================================================================
	        --> 

            <section class="<?php echo $this->classes; ?>" <?php echo $this->ad_bg; ?>>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                        	<?php echo $this->ad_type(); ?>             
                        </div>
                    </div>
                </div>
            </section>

	    	<?php
	    }


	}