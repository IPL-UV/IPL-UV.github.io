# GEE Course Material

<br>

## Part 1 Code

<br>

### gee_tutorial_01.js

```javascript
/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var l8 = ee.ImageCollection("LANDSAT/LC8_L1T_TOA");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// 1. Simple way to show an image
var image = ee.Image('LANDSAT/LC8_L1T_TOA/LC81930282013158LGN00');
Map.centerObject(image);
Map.addLayer(image, trueColor, 'True color image');

// 2. Filter an image collection selecting date range
var filtered = l8.filterDate('2013-01-01', '2014-12-31');
//print(filtered.size());

// The median is computed using map-reduce (automatically!)
var median =  filtered.median();
// Does the same thing, but more explicitly, and changes the band names
var otherMedian = filtered.reduce('median');
// Yet another way, even more explicit
var otherMedian2 = filtered.reduce(ee.Reducer.median())

// To show the L8 images in true or false color
var trueColor = {bands:['B4','B3','B2'], min:0, max:0.3};
var falseColor = {bands:['B5','B4','B3'], min:0, max:0.3};

Map.addLayer(filtered, trueColor, 'True color image collection');
Map.addLayer(filtered, falseColor, 'False color image collection');

Map.addLayer(median, trueColor, 'median');
Map.addLayer(otherMedian, 
  {bands:['B4_median','B3_median','B2_median'], min:0, max:0.3},
  'another median');
```


### gee_tutorial_02.js

```javascript
// First take an image and show it
var trueColor = {bands:['B4','B3','B2'], min:0, max:0.3};
var image = ee.Image('LANDSAT/LC8_L1T_TOA/LC81930282013158LGN00');
Map.centerObject(image, 7);
Map.addLayer(image, trueColor, 'Image');

// How to compute NDVI, in several ways:

// 1. Directly
var red = image.select('B4');
var nir = image.select('B5');
var ndvi = nir.subtract(red).divide(nir.add(red));

// nvdi visualization properties
var ndvi_visprops = {min:0, max:1, palette:['FFFFFF', 'FF0000', '00FF00']};
Map.addLayer(ndvi, ndvi_visprops, 'NDVI 1')

// 2. Using existing function
ndvi = image.normalizedDifference(['B5','B4']);
Map.addLayer(ndvi, ndvi_visprops, 'NDVI 2')

// 3. Using a function
//    => will be useful later when applied to an image collection
// Alternatively
// var addNDVI = function addNDVI(image) {
function addNDVI(image) {
  var ndvi = image.normalizedDifference(['B5','B4']);
  return image.addBands(ndvi);
}

// Using our function to compute the NDVI an add it as a new band
var withNDVI = addNDVI(image);
print(withNDVI);
Map.addLayer(withNDVI.select(['nd']), ndvi_visprops, 'NDVI 3');
```

### gee_tutorial_03.js

```javascript
/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var l8 = ee.ImageCollection("LANDSAT/LC8_L1T_TOA"),
    point = /* color: ff0000 */ee.Geometry.Point([-0.48614501953125, 39.715638134796336]),
    geometry = /* color: 00ff00 */ee.Geometry.Polygon(
        [[[-0.545196533203125, 39.7642140375156],
          [-0.5328369140625, 39.6765413702479],
          [-0.4449462890625, 39.69239407904182],
          [-0.45318603515625, 39.79059962227577]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Example of:
// 1. Using 'map' to apply a function in parallel to an image collection
// 2. Export the image to Google Drive
// 3. Obtain statictis in regions or points
// 4. Show an evolution chart

var trueColor = {bands:['B4','B3','B2'], min:0, max:0.3};

function addNDVI(image) {
  var ndvi = image.normalizedDifference(['B5','B4']);
  return image.addBands(ndvi);
}

var filtered = l8.filterDate('2013-01-01', '2014-01-01');

// Apply a function to an image collection
var withNDVI = filtered.map(addNDVI);

// Composites all the images in a collection,
// using a quality band as a per-pixel ordering function.
var greenest = withNDVI.qualityMosaic('nd');

print(withNDVI.first());
print(greenest);

Map.centerObject(point, 10);
Map.addLayer(withNDVI, trueColor, 'withNDVI');
Map.addLayer(greenest, trueColor, 'Greenest');
Map.addLayer(greenest, {bands: ['nd'], min: 0, max: 1}, 'NDVI');

// Export (this creates a task you must run after this script has finished)
Export.image.toDrive(greenest.select('nd'), 'withNDVI', 'GEE');
// Export all bands (except BQA which is int and raises an error)
//Export.image.toDrive(
//  greenest.select(['B[1-11]','nd']), 'greenest', 'GEE');

// Reduce regions:
print(greenest.reduceRegion(ee.Reducer.mean(), geometry, 30));
print(greenest.select(['nd']).reduceRegion(ee.Reducer.mean(), point, 30));

// Charts
// Show the NDVI time series in a graph
print(ui.Chart.image.series(withNDVI.select('nd'), point));
```

## Part 2 Code

<br>

### DemoSpainClass.js

```javascript
var countries = ee.FeatureCollection('ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw');
print(countries);
var spain = countries.filterMetadata('Country', 'equals', 'Spain');
print(spain);

// L7 image collection
var landsat = ee.ImageCollection("LANDSAT/LE7_TOA_1YEAR");
// VLC point
var point = ee.Geometry.Point([-0.3330230712890625, 39.480708957174556]);
// Water and class polygons (both near the cost)
var class_water = ee.Geometry.Polygon(
  [[[-0.2691650390625, 39.51569536664155],
  [-0.27706146240234375, 39.44388219489487],
  [-0.13423919677734375, 39.43778393700683],
  [-0.1242828369140625, 39.52046261905615]]]);
var  class_land =ee.Geometry.Polygon(
  [[[-0.46245574951171875, 39.50165655681176],
  [-0.42022705078125, 39.475955540420635],
  [-0.3659820556640625, 39.44176112227503],
  [-0.339202880859375, 39.51887357127223],
  [-0.4140472412109375, 39.52867212011217]]]);
  
landsat = ee.Image(landsat.sort('system:index',false).first());
//landsat = landsat.filterMetadata('system:index', 'equals','2014');
//landsat = landsat.filterMetadata('system:index', 'equals','2014').reduce(ee.Reducer.sum());
print(landsat);

// Create classes
class_water = ee.Feature(class_water).set({'class':0});
class_land = ee.Feature(class_land).set({'class':1});
// Join them in a FeatureCollection
var FC = ee.FeatureCollection([class_water,class_land]);
print(FC);

// Create training set sampling pixel from the image in the defined polygons
var training = landsat.sampleRegions(FC, ['class'], 300);
print(training);

// Train a classifier with default parameters
var bands = landsat.bandNames();
var model = ee.Classifier.naiveBayes().train(training, 'class', bands);

// Classify the image with the same bands used for training.
var classified = landsat.select(bands).classify(model);
//classified = classified.clip(spain);

//Map.centerObject(point, 12);
Map.centerObject(spain, 6);
Map.addLayer(landsat.clip(spain), {bands: ['B3','B2','B1'], min:10, max: 65}, 'image');
Map.addLayer(classified, {min: 0, max: 1, palette: ['0000FF', 'FF0000'], opacity: 0.5}, 'classification');
//Map.addLayer(training, {}, 'training'); 
```

### DemoClassification.js

```javascript
// Use these bands for prediction.
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10', 'B11'];

// Load a Landsat 8 image to be used for prediction.
var image = ee.Image('LANDSAT/LC8_L1T_TOA/LC82320672013207LGN00');
//print(image)
//Map.addLayer(image)

image= image.select(bands);
//print(image)
// Load training points. The numeric property 'class' stores known labels.
var points = ee.FeatureCollection('ft:10X7SUjDTiFJDyIA58zLcptK8pwBwjj1BV12SQOgJ')
.remap([1, 2], [0, 1], 'class');
//print(points)

// Overlay the points on the imagery to get training.
var training = image.sampleRegions(points, ['class']);
//print(training)
// Train a CART classifier with default parameters.
var trained = ee.Classifier.cart().train(training, 'class', bands);
//print(trained)
// Classify the image with the same bands used for training.
var classified = image.select(bands).classify(trained);

// Display the inputs and the results.
Map.centerObject(image, 10);
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], min: 0.05, max: 0.14}, 'image');
Map.addLayer(classified, {min: 0, max: 1, palette: ['00A000', 'A00000']}, 'classification');
Map.addLayer(points, {'palette': '0000ff', 'max': 10}, 'training samples');

// Exercise: try other classifiers
```

### DemoRegression.js

```javascript
// This function adds a time band to the image.
var createTimeBand = function(image) {
  // Scale milliseconds by a large constant to avoid very small slopes
  // in the linear regression output.
  return image.addBands(image.metadata('system:time_start').divide(1e18));
};

// Load the input image collection: projected climate data.
var collection = ee.ImageCollection('NASA/NEX-DCP30_ENSEMBLE_STATS')
  .filterMetadata('scenario', 'equals', 'rcp85')
  .filterDate(ee.Date('2006-01-01'), ee.Date('2050-01-01'))
  // Map the time band function over the collection.
  .map(createTimeBand);
  
// Get scale from the projected mean precipitation band.
//var scale = ee.Image(collection.first())
//  .select(['pr_mean']).projection().nominalScale();
//print(scale)

// Reduce the collection with the linear fit reducer.
// Independent variable are followed by dependent variables.
var linearFit = collection.select(['system:time_start', 'pr_mean'])
  .reduce(ee.Reducer.linearFit());
print(linearFit)
// Display the results.
Map.setCenter(-100.11, 40.38, 4);
Map.addLayer(linearFit,
  {min: 0, max: [-0.9, 8e-5, 1],
  bands: ['scale', 'offset', 'scale']}, 'fit');
```

### DemoRegressionCART.js

```javascript
/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var imageCollection = ee.ImageCollection("LANDSAT/LC8_L1T_ANNUAL_EVI");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
print(ee.Image(imageCollection))

// Use these bands for prediction.
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10', 'B11'];
// Load a Landsat 8 image to be used for prediction.
var image = ee.Image('LANDSAT/LC8_L1T_TOA/LC82320672013207LGN00');

image = image.select(bands);
//print(image)
// Load training points. The numeric property 'class' stores known labels.
var points = ee.FeatureCollection('ft:10X7SUjDTiFJDyIA58zLcptK8pwBwjj1BV12SQOgJ')
.remap([1, 2], [0, 1], 'class');
//print(points)

// Regression model :
// Recortamos la imagen al area de la imagen Landsat
var EVI = ee.Image(imageCollection.first()).clip(image.geometry())

// Generamos la imagen con las bandas y el output:
var image1 = image.addBands(EVI);
// Buscamos 100 pixeles random para entrenar:
var training = image1.sample({numPixels: 100, seed: 0});
print(training)

// Aplicamos el CART pero en modo regression:
var trained = ee.Classifier.cart().setOutputMode('REGRESSION').train(training, 'EVI', bands);
// Obtenemmos el output predecido:
var regression = image.classify(trained,'EVI_pred');
print(regression)

// Display the inputs and the results.
// var colors = ['FF0000', 'FFFF00', '00FF00', '00FFFF', '0000FF', 'FF00FF'];
var colors_summer = [
  '007F66','048166','088366','0C8566','108766','148966','188B66','1C8D66','208F66','249166',
  '289366','2C9566','309766','349966','389B66','3C9D66','409F66','44A166','48A366','4CA566',
  '50A766','55AA66','59AC66','5DAE66','61B066','65B266','69B466','6DB666','71B866','75BA66',
  '79BC66','7DBE66','81C066','85C266','89C466','8DC666','91C866','95CA66','99CC66','9DCE66',
  'A1D066','A5D266','AAD466','AED666','B2D866','B6DA66','BADC66','BEDE66','C2E066','C6E266',
  'CAE466','CEE666','D2E866','D6EA66','DAEC66','DEEE66','E2F066','E6F266','EAF466','EEF666',
  'F2F866','F6FA66','FAFC66','FFFF66']
var colors = ['007F66','208F66','409F66','61B066','81C066','A1D066','C2E066','E2F066']
Map.centerObject(image, 10);
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], min:0.05, max: 0.14}, 'image');
Map.addLayer(points,{'palette': '0000ff', 'max': 10}, 'training_samples');
Map.addLayer(EVI, {'palette': colors}, 'EVI')
Map.addLayer(regression, {'palette': colors}, 'EVI_predicted')

// ValidaciÃ³n:
var validation = (image1.addBands(regression)).sample({
  numPixels: 50,
  seed: 2
});
//print(validation)

// var validated = validation.classify(trained);
print(validation.limit(3)) //sqrt(mean((Labels-PreLabels).^2))
function error(fc){
  var label = ee.Number(fc.get('EVI'));
  var pred = ee.Number(fc.get('EVI_pred'));
  return fc.set({'error':(label.subtract(pred)).pow(2)});
}

var res = ee.FeatureCollection(validation.map(error));
print(res)

var mean = res.select(['error']).reduceColumns(ee.Reducer.mean(),['error']).get('mean');
var RMSE = ee.Number(mean).sqrt();
print(RMSE);
```

### DemoClustering.js

```javascript
/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var imageCollection = ee.ImageCollection("LANDSAT/LC8_L1T_ANNUAL_EVI");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
print(ee.Image(imageCollection))

// Use these bands for prediction.
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10', 'B11'];
// Load a Landsat 8 image to be used for prediction.
var image = ee.Image('LANDSAT/LC8_L1T_TOA/LC82320672013207LGN00');
//print(image)

image = image.select(bands);
//print(image)
// Load training points. The numeric property 'class' stores known labels.
var points = ee.FeatureCollection('ft:10X7SUjDTiFJDyIA58zLcptK8pwBwjj1BV12SQOgJ')
.remap([1, 2], [0, 1], 'class');
//print(points)

// Clustering
//var training = image.sampleRegions(points, ['class']);
//var EVI = ee.Image(imageCollection.first()).clip(image.geometry());
//var image1 = image.addBands(EVI);

var training = image.sample({numPixels: 100, seed: 0});

var Names = ee.Feature(training.first()).propertyNames().remove('system:index');
Names = Names.remove('class');
print(Names)

var prClustering = ee.Clusterer.wekaKMeans(3);
print(prClustering);
var prTrainClus = prClustering.train(training, Names);
print(prTrainClus);
print(prTrainClus.schema())

var colors = ['00FFFF', '0000FF','FFFF00'];
var RES = image.cluster(prTrainClus); 
print(RES)

// Display the inputs and the results.
Map.centerObject(image, 10);
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], max: 0.4}, 'image');
Map.addLayer(RES, {'max':2,'min':0, palette: colors},'Clustering')
Map.addLayer(points,{'palette': '0000ff', 'max': 10}, 'Training points');
```

### DemoClassificationWithStatistics.js

```javascript
// Use these bands for prediction.
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10', 'B11'];

// Load a Landsat 8 image to be used for prediction.
var image = ee.Image('LANDSAT/LC8_L1T_TOA/LC82320672013207LGN00');
//print(image)
Map.addLayer(image)

image= image.select(bands);
//print(image)
// Load training points. The numeric property 'class' stores known labels.
var points = ee.FeatureCollection('ft:10X7SUjDTiFJDyIA58zLcptK8pwBwjj1BV12SQOgJ')
.remap([1, 2], [0, 1], 'class');
// print(points)

//Split featureCollection in train and test:
points = points.randomColumn();
// print(points);
var trainPoints = points.filter(ee.Filter.gt('random', 0.25));
// print(trainPoints)
// Overlay the points on the imagery to get training.
var training = image.sampleRegions(trainPoints, ['class']);
//print(training)

// Train a CART classifier with default parameters.
var trained = ee.Classifier.cart().train(training, 'class', bands);
//print(trained)

// training
var trainAccuracy = trained.confusionMatrix();
print('Resubstitution error matrix: ', trainAccuracy);
print('Training overall accuracy: ', trainAccuracy.accuracy());
print('Training Kappa: ', trainAccuracy.kappa());
print(trainAccuracy.array().matrixDiagonal().reduce(ee.Reducer.sum(),[0]));

// test
var testPoints = points.filter(ee.Filter.lte('random', 0.25));
var testingSet = image.sampleRegions({
  collection: testPoints,
  properties:['class']});
  
var ClassifiedTest = testingSet.classify(trained);
var testAccuracy = ClassifiedTest.errorMatrix('class', 'classification');
print('Test error matrix: ', testAccuracy);
print('Test overall accuracy: ', testAccuracy.accuracy());
print('Test kappa: ', testAccuracy.kappa());
print(testAccuracy.array().matrixDiagonal().reduce(ee.Reducer.sum(),[0]));

// Classify the image with the same bands used for training.
var classified = image.select(bands).classify(trained);

// Display the inputs and the results.
Map.centerObject(image, 10);
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], max: 0.4}, 'image');
Map.addLayer(classified, {min: 0, max: 1, palette: ['00FF00', 'FF0000']},
  'classification');
Map.addLayer(points,{
    'palette': '0000ff',
    'max': 10});
```

## GEE Course Material

<br>

### External Resources from GEE Developers

- [Overview](https://docs.google.com/presentation/d/1tOOBDLodQ4tyW2ldaDGVMTd8R6IPSTlfm_ddu9x33jc/edit#slide=id.p)
- [Introduction](https://docs.google.com/presentation/d/1jk48iXp1DvGRl65pKHruV-InQX3B6GP7dH39sDyiens/edit#slide=id.g4954714e1_18)
- [Advanced API](https://docs.google.com/presentation/d/1BbMtoS8wvU_RrsnzxR31le58ZPzLzj-aa43ZQOYXAiM/edit#slide=id.ga42bbbf0f_0_0)
- [2016 Advanced API](https://docs.google.com/presentation/d/1A5bRots9uoQXd-ERfnF7wqB9MGLS9XFG7ABXsMNknQk/edit#slide=id.g64cc58566_0_0)
- [2016 Python API](https://docs.google.com/presentation/d/1N7W09Njvz9ROrarp8SspA0kSC17Z0bzBbzTxCxskdYI/edit#slide=id.g494020760_258)