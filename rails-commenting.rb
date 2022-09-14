# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This sets up the class for the BlogPostsController inheriting from Application Controller.
class BlogPostsController < ApplicationController
  def index
    # ---2) The index method displaying all of the blog posts.
    @posts = BlogPost.all
  end

  # ---3) The show method to display a specific blog post. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new method will display a form for a new blog post.
  def new 
    @post = BlogPost.new
  end

  def create
    # ---5) This create method will ensure the post inputed into the form is valid and if so will take you to the individual post. If the post is not valid it will redirect you back to the input form. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) The edit method will allow us to edit a database entry in a form identified by the passed id. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The update method will redirect to the updated post if it was valid and back to the edit from if not valid. This is after the edit has been submitted. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This destroy method will redirect back to the specific blog post if destroy was not succesful. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) This method is declaring private params for blog_post.
  private
  def blog_post_params
    # ---10) For a new blow to be created, it must follows the requirements of haveing a title and content. 
    params.require(:blog_post).permit(:title, :content)
  end
end
