class StoreController < ApplicationController

  def index
    @products = Product.order(:popularity).reverse_order
    if session[:counter].nil?
      session[:counter] = 0
    else
      session[:counter] += 1
      if session[:counter] > 5
        flash.now[:index] = "You've been here #{session[:counter]} time".pluralize(session[:counter])+". Buy something or leave. This isn't a library."
    
      end
    end
    respond_to do |format|
        format.html {
            if (params[:spa] && params[:spa] == "true")
                render 'index_spa'
            # the else case below is by default
            else
               render 'index'
            end
        }
        format.json {render json: @products}
        end
      end
    end
