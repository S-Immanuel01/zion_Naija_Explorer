from os import walk, rename
from os.path import join

def image_name_editor(reverse, path):
    for  folder, sub_folder, images in walk(f"images/{path}"):
        reversed_images_raw = []
        for i in range(len(images)):
            i = len(images) - i -1
            reversed_images_raw.append(images[i])
        reversed_images = images  if reverse else reversed_images_raw
        for i, image in enumerate(reversed_images):
            rename(join(folder, image), join(folder,f"{i}.png"))

    
if __name__ == "__main__":
    image_name_editor(False, "theaters/ozone")      