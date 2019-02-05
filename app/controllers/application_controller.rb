class ApplicationController < ActionController::Base
  before_action :set_global_cart

 def set_global_cart
   @global_cart = current_user.cart || current_user.cart.create()
   //something similar & it will be better to use different name instead of @cart
 end
  protect_from_forgery with: :exception
end
