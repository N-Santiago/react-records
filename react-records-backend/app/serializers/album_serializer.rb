class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :genre, :condition, :description, :price, :category_name, :category_id
end
