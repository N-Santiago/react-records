class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :album_image, :genre, :condition, :description, :price, :category_name, :category_id
end
