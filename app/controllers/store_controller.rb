class StoreController < ApplicationController

  def index
    @products = Product.order(:title)
    if session[:counter].nil?
      session[:counter] = 0
    else
      session[:counter] += 1
      if session[:counter] > 5
        flash.now[:index] = "You've been here #{session[:counter]} time".pluralize(session[:counter])+". Buy something or leave. This isn't a library."
        render "index"
        end
      end
    end
  end
