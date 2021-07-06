class AlbumsController < ApplicationController
    def index 
        albums = Album.all.with_attached_image
        render json: albums 
    end 

    def show
        album = Album.find(params[:id])
        render json: album
    end 

    def create
        album = Album.new(album_params)
        if album.save
          render json: album
        else
            render json: album, status: 500
        end
    end

    def destroy
        album = Album.find(params[:id])
        album.destroy
    end 

    private

    def album_params
        params.permit(:title, :artist, :image, :genre, :condition, :description, :price, :category_id)
    end 
end
