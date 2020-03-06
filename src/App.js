import React, { Component } from "react";
import { PhotoEditorSDKUI } from "../pesdkBuild/photoeditorsdk/";
import { custom } from "./customconf";

class App extends Component {
  editor = null;

  config = {
    image:
      "https://static.photoeditorsdk.com/libraries/unsplash/raw/PZAxzN5DPkc.jpg",
    // assetBaseUrl: "https://imgly.github.io/pesdk-html5/assets/",
    engine: {
      license: ""
    },
    library: {
      enableUpload: true,
      enableWebcam: true
    },
    filter: {
      categories: [
        {
          identifier: "imgly_filter_category_duotone",
          items: [
            { identifier: "imgly_duotone_desert" },
            { identifier: "imgly_duotone_peach" },
            { identifier: "imgly_duotone_clash" },
            { identifier: "imgly_duotone_plum" },
            { identifier: "imgly_duotone_breezy" },
            { identifier: "imgly_duotone_deepblue" },
            { identifier: "imgly_duotone_frog" },
            { identifier: "imgly_duotone_sunset" }
          ]
        },
        {
          identifier: "imgly_filter_category_bw",
          items: [
            { identifier: "imgly_lut_ad1920" },
            { identifier: "imgly_lut_bw" },
            { identifier: "imgly_lut_x400" },
            { identifier: "imgly_lut_litho" },
            { identifier: "imgly_lut_sepiahigh" },
            { identifier: "imgly_lut_plate" },
            { identifier: "imgly_lut_sin" }
          ]
        },
        {
          identifier: "imgly_filter_category_vintage",
          items: [
            { identifier: "imgly_lut_blues" },
            { identifier: "imgly_lut_front" },
            { identifier: "imgly_lut_texas" },
            { identifier: "imgly_lut_celsius" },
            { identifier: "imgly_lut_cool" }
          ]
        },
        {
          identifier: "imgly_filter_category_smooth",
          items: [
            { identifier: "imgly_lut_chest" },
            { identifier: "imgly_lut_winter" },
            { identifier: "imgly_lut_kdynamic" },
            { identifier: "imgly_lut_fall" },
            { identifier: "imgly_lut_lenin" },
            { identifier: "imgly_lut_pola669" }
          ]
        },
        {
          identifier: "imgly_filter_category_cold",
          items: [
            { identifier: "imgly_lut_elder" },
            { identifier: "imgly_lut_orchid" },
            { identifier: "imgly_lut_bleached" },
            { identifier: "imgly_lut_bleachedblue" },
            { identifier: "imgly_lut_breeze" },
            { identifier: "imgly_lut_blueshadows" }
          ]
        },
        {
          identifier: "imgly_filter_category_warm",
          items: [
            { identifier: "imgly_lut_sunset" },
            { identifier: "imgly_lut_eighties" },
            { identifier: "imgly_lut_evening" },
            { identifier: "imgly_lut_k2" },
            { identifier: "imgly_lut_nogreen" }
          ]
        }
      ]
    },
    custom,
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
