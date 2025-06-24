import fs from "fs";
import config from "./config.js";
const folders = new Array(config.count).fill(1);
export const handleCreatedFolders = () => {
  folders.forEach((_, index) => {
    fs.mkdir(config.root + (index + 1), () => {
      try {
        console.log("Las carpetas se crearon con exito ");
      } catch (err) {
        console.log(err);
      }
    });
  });
};

export const handleDeletefolders = () => {
  folders.forEach((_, index) => {
    fs.rm(
      config.root + (index + 1),
      { recursive: true, force: true },
      (err) => {
        try {
          console.log("Se eliminaron las carpetas con exito");
        } catch (err) {
          console.log(err);
        }
      }
    );
  });
};
