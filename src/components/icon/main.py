
# import required module
import os
# assign directory
lineDirectory = 'icons/line'
solidDirectory = 'icons/solid'

# Icon folders
line = []
solid = []
 
# iterate over files in line folder
for filename in os.listdir(lineDirectory):
    if filename == 'index.ts':
        continue
        
    f = os.path.join(lineDirectory, filename)
    # checking if it is a file
    if os.path.isfile(f):
        line.append(filename.replace('.tsx', ''))

# iterate over files in solid folder
for filename in os.listdir(solidDirectory):
    if filename == 'index.ts':
        continue

    f = os.path.join(solidDirectory, filename)
    # checking if it is a file
    if os.path.isfile(f):
        solid.append(filename.replace('.tsx', ''))

lineFile = open(lineDirectory + "/index.ts", "w")
for filename in line:
    exportString = "export {{ default as {0} }} from './{1}';\n"
    if (filename[0].isdigit()):
        lineFile.write(exportString.format("d" + filename, filename))
        continue

    lineFile.write(exportString.format(filename, filename))

lineFile.close()

solidFile = open(solidDirectory + "/index.ts", "w")
for filename in solid:
    exportString = "export {{ default as {0} }} from './{1}';\n"
    if (filename[0].isdigit()):
        solidFile.write(exportString.format("d" + filename, filename))
        continue

    solidFile.write(exportString.format(filename, filename))

solidFile.close()