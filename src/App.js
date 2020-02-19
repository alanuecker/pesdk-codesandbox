import React, { Component } from "react";

import { UIEvent, PhotoEditorSDKUI } from "photoeditorsdk";
import { ExampleLibraryProvider } from "./provider";

class App extends Component {
  /** If this config is changed the it will always override the control gui settings */
  config = {
    image:
      "https://static.photoeditorsdk.com/libraries/unsplash/raw/PZAxzN5DPkc.jpg",
    engine: {
      license: ""
    },
    assetBaseUrl: "http://imgly.github.io/pesdk-html5/assets",
    library: {
      enableUpload: true,
      enableWebcam: true,
      provider: ExampleLibraryProvider
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

  serialize = options => {
    this.editor.serialize(options).then(serialized => {
      if (options.mode === "download") {
        var dataStr =
          "data:text/json;charset=utf-8," +
          encodeURIComponent(JSON.stringify(serialized, true, 2));
        var link = document.createElement("a");
        link.setAttribute("href", dataStr);
        link.setAttribute("download", "serialization-3.8.0.json");
        link.click();
      } else if (options.mode === "log") {
        console.log(JSON.stringify(serialized, true, 2));
      }
    });
  };

  deserialize = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/JSON";
    fileInput.addEventListener("change", () => {
      if (fileInput.files == null || !fileInput.files.length) {
        return;
      }
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const data = JSON.parse(reader.result);
        this.editor
          .deserialize(data)
          .then(() => {
            console.log("Finished deserialization");
          })
          .catch(error => {
            console.error("errror", error);
          });
      };
      reader.readAsText(file);
    });
    fileInput.click();
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
