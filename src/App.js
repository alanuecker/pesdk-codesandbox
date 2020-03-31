import React, { Component } from "react";
import { PhotoEditorSDKUI } from "photoeditorsdk";
import { ExampleLibraryProvider } from './provider'

class App extends Component {
  editor = null;

  config = {
    image:
      "https://static.photoeditorsdk.com/libraries/unsplash/raw/PZAxzN5DPkc.jpg",
    engine: {
      license: ""
    },
    library: {
      enableUpload: true,
      enableWebcam: true,
      provider: ExampleLibraryProvider,
    },
    filter: {
      categories: [
        {
          identifier: "imgly_filter_category_duotone"
        },
        {
          identifier: "imgly_filter_category_bw"
        },
        {
          identifier: "imgly_filter_category_vintage"
        },
        {
          identifier: "imgly_filter_category_smooth"
        },
        {
          identifier: "imgly_filter_category_cold"
        },
        {
          identifier: "imgly_filter_category_warm"
        }
      ]
    }
  };

  componentDidMount() {
    this.initEditor(this.config);
  }

  exportfn = () => {
    this.editor.export(false).then(image => {
      console.log(image);
    });
  };

  async initEditor(config) {
    this.editor = await new PhotoEditorSDKUI.init({
      ...config,
      container: "#container"
    });
  }

  render() {
    return <div id="container" className="container" />;
  }
}

export default App;
