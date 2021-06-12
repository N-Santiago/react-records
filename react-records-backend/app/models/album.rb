class Album < ApplicationRecord
    belongs_to :category 

    def category_name
        self.category ? self.category.name : "Not assigned" 
    end 
end
