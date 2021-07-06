class Album < ApplicationRecord
    belongs_to :category 
    has_one_attached :image

    def category_name
        self.category ? self.category.name : "Not assigned" 
    end 
end
