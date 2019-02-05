class ApplicationController < ActionController::Base
  before_action :set_cart

   def set_cart
     @cart = cart.create()
   end

  protect_from_forgery with: :exception
end
