# Portolio application

## APPLICATION URL: https://juraj-zovinec.herokuapp.com/

This web app has been created in order to sum up my relevant projects which may give you hint about my current programming skills.

## Home

This navbar section contains 3 main components:
1. **Curicullum Vitae**
2. **Technologies I want to learn, improve in, work with**
3. **Enter the project room**

### Curiculum Vitae

This component is based on recursive rendering of *cv.json* file. This recursive approach is applicated in [CvInformation.js](https://github.com/Jurajzovinec/CV-Zovinec/blob/master/src/components/CvInformation.js) component, where this component in return value calls itself.

### Technologies I want to learn work with

This component may look a little chaotic, and that is the point! I can not be really sure what is will work with so this component represent my begginer confusion. Position of each technology is fired up randomly, however programm checks whether technology will collide with another. To secure this *non-colliding position* random position is generated in while loop untill the non-colliding position is met. On the top, to emphasize this randomization, each component is fired after random period of time. If you want to check this component have a look [here](https://github.com/Jurajzovinec/CV-Zovinec/blob/master/src/components/TechnologiesVisualization2D.js).

### Enter the Project room

Basic component, which contains div with reference to project room.

## Project room

Project room is react-three-fiber based component which shows the most relevant projects of mine. In this room are 6 main 3D components:

* [Table](https://github.com/Jurajzovinec/CV-Zovinec/blob/master/src/components/3DProjectRoomComponents/TableModel.js)
* [Fruit Fly dispenser](https://github.com/Jurajzovinec/CV-Zovinec/blob/master/src/components/3DProjectRoomComponents/FruitFlyDispenser.js)
* [2D plotter](https://github.com/Jurajzovinec/CV-Zovinec/blob/master/src/components/3DProjectRoomComponents/TwoDPlotter.js)
* [IMM machine](https://github.com/Jurajzovinec/CV-Zovinec/blob/master/src/components/3DProjectRoomComponents/ImmMachine.js)
* [Drawing Slicer](https://github.com/Jurajzovinec/CV-Zovinec/blob/master/src/components/3DProjectRoomComponents/DrawingSlicer.js)
* [Surfboard](https://github.com/Jurajzovinec/CV-Zovinec/blob/master/src/components/3DProjectRoomComponents/Surfboard.js)

All of those components use as source of 3D topology **.GLTF** type files. Also, each of them has its own animation which was created with react-three-spring module.

## CV in pdf

Also very basic component which only contains button which will invoke downloading of CV_Juraj_Zovinec.pdf asset.