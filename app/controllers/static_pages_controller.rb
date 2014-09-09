class StaticPagesController < ApplicationController
  def root
    render "root"
  end

  def resume
    render "resume"
  end

  def projects
    render "projects"
  end

  def contact
    render "contact"
  end
end