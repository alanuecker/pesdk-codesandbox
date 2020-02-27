import React, { Component } from "react";
import { PhotoEditorSDKUI } from "photoeditorsdk";

class App extends Component {
  editor = null;

  config = {
    image:
      "https://static.photoeditorsdk.com/libraries/unsplash/raw/PZAxzN5DPkc.jpg",
    assetBaseUrl: "https://imgly.github.io/pesdk-html5/assets/",
    engine: {
      license: ""
    },
    library: {
      enableUpload: true,
      enableWebcam: true
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

  initEditor(config) {
    this.editor = new PhotoEditorSDKUI({
      ...config,
      container: document.getElementById("container")
    });
  }

  render() {
    return <div id="container" className="container" />;
  }
}

export default App;
