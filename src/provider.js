import { LibraryProvider, LibraryCategory, LibraryImage } from 'photoeditorsdk'

export class ExampleLibraryProvider extends LibraryProvider {

  loadData() {
    if (this.data) { return Promise.resolve(this.data) }
  
    return this.loadJSON('//static.photoeditorsdk.com/libraries/unsplash/metadata.json')
      .then((data) => {
        if(typeof data === 'string'){
          data = JSON.parse(data)
        }
        this.data = data
        return data
      })
  }
  getCategories() {
    return this.loadData()
      .then((data) => {
        return data.categories.map((categoryData) => {
          return new LibraryCategory({
            name: categoryData.name,
            coverImageUrl: categoryData.coverImage
          })
        })
      })
  }
  searchImages(query) {
    return this.loadData()
      .then((data) => {
        return data.images.filter((image) => {
          var words = query.split(/\s+/)
          for (var i = 0; i < words.length; i += 1) {
            var word = words[i]
            var regexp = new RegExp(word, 'i')
            if (!regexp.test(image.title)) {
              return false
            }
          }
  
          return true
        }).map((imageData) => {
          return new LibraryImage(imageData)
        })
      })
  }
}