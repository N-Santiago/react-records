# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
categories = ['Vynil', 'CD', 'Cassette']

categories.each do |c|
    Category.create(name: c)
end 

album1 = Album.create(title: "Psychocandy", artist: "The Jesus And Mary Chain", genre: "Rock", condition: "good", description: "First Pressing, Cassette", price: 50, category_id: 3)

album2 = Album.create(title: "Sgt. Pepper Lonely Hearts Club Band", artist: "The Beatles", genre: "Rock", condition: "sealed", description: "Mono Audio, Reissue", price: 30, category_id: 1)

album3 = Album.create(title: "Enter The Wu-Tang (36 Chambers)", artist: "Wu-Tang Clan", genre: "Hip Hop", condition: "sealed", description: "Sealed CD", price: 16, category_id: 2)

album4 = Album.create(title: "Hammerheart", artist: "Bathory", genre: "Metal", condition: "sealed", description: "Repressing, 180 gram, 12 inch vinyl ", price: 30, category_id: 1,)

album5 = Album.create(title: "Ride The Lightning ", artist: "Metallica", genre: "Metal", condition: "good", description: "Used Cassette ", price: 40, category_id: 3)