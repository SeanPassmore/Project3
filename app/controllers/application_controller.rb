class ApplicationController < ActionController::Base
  before_action :set_cart
  protect_from_forgery with: :exception
end
