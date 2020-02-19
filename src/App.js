import React, { Component } from "react";

import { UIEvent, PhotoEditorSDKUI } from "photoeditorsdk";

class App extends Component {
  /** If this config is changed the it will always override the control gui settings */
  config = {
    image:
      "https://static.photoeditorsdk.com/libraries/unsplash/raw/PZAxzN5DPkc.jpg",
    engine: {
      license: ""
    },
    library: {
      enableUpload: true,
      enableWebcam: true,
    }
  };

  editor = null;
  componentDidMount() {
    this.init();
  }

  exportfn = () => {
    this.editor.export(false).then(image => {
      console.log(image);
    });
  };

  init() {
    /** Example of loading alocal image  */
    if (this.loadingLocalImage) {
      const image = new Image();
      image.onload = () => {
        this.config.image = image;
        this.initEditor();
      };
      image.src = "./example.png";
    } else {
      this.initEditor();
    }
  }

  initEditor() {
    this.editor = new PhotoEditorSDKUI({
      ...this.config,
      container: document.getElementById("container")
    });
    this.editor.on(UIEvent.EDITOR_READY, () => {
      // console.log('Editor is ready')
    });
    this.editor.on(UIEvent.EXPORT, imageSrc => {
      // console.log('exported', imageSrc)
    });
  }

  render() {
    return <div id="container" className="container" />;
  }
}

export default App;
