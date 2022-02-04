---
sidebar_position: 1
---

# How to handle missing data in machine learning

### What is missing data?
>*In simple terms, it's the data where values are missing for some attributes.*


### Why dealing with missing data matters?
>*If you're building a machine learning model, to make your model more accurate, you need to deal with missing data. If you don't, your model will be biased towards the data that has missing values.*


**Now that you know how important is to deal with missing data, let's look into various methods that can help us.**

## Deductive Imputation
This is an imputation rule defined by logical reasoning. 
>### What is imputation rule??
>>*Imputation can be thought of as the process of looking at a row of missing data and then "infering", or making reasonable guess, as to what value should be in it's place.*
>>>*Basically guessing the data for a given field, that's it.*

Comming back to Deductive Imputation, take an example of person has 2 children in year 1, year 2 as missing value, and 2 children in year 3.

| Year 1 | Year 2 | Year 3 |
| ------ | ------ | ------ |
| 2      |        | 2      |

We can reasonably impute that the missing value is 2 children in year 2. It requires no inference, and the true value can be assessed. But it can be time-consuming or might require specific coding.


Even though it's accurate, deductive imputation cannot be applied to all datasets. That's why we need to use statistical methods to impute the missing values.

Consider an example [dataset](https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.data.csv) **Pima Indians Diabetes** which includes medical details related to onset of diabetes within 5 years.

>These are the first few rows in the dataset.

| pregnant_num | plasma_glucose_conc | blood_pressure | triceps_skinfold_thinkness | serum_insulin | bmi  | diabetes_pedigree_function | age | class |
| ------------ | ------------------- | -------------- | -------------------------- | ------------- | ---- | -------------------------- | --- | ----- |
| 6            | 148                 | 72             | 35                         | 0             | 33.6 | 0.627                      | 50  | 1     |
| 1            | 85                  | 66             | 29                         | 0             | 26.6 | 0.351                      | 31  | 0     |
| 8            | 183                 | 64             | 0                          | 0             | 23.3 | 0.672                      | 32  | 1     |
| 1            | 89                  | 66             | 23                         | 94            | 28.1 | 0.167                      | 21  | 0     |
| 0            | 137                 | 40             | 35                         | 168           | 43.1 | 2.288                      | 33  | 1     |
| 5            | 116                 | 74             | 0                          | 0             | 25.6 | 0.201                      | 30  | 0     |
| 3            | 78                  | 50             | 32                         | 88            | 31.0 | 0.248                      | 26  | 1     |
| 10           | 115                 | 0              | 0                          | 0             | 35.3 | 0.134                      | 29  | 0     |

You will notice that there are missing observations for some columns that are marked as a zero value. Specifically, the following columns have an invalid zero value indicating missing values:
1. *Plasma glucose concentration*
2. *Diastolic blood pressure*
3. *Triceps skinfold thickness*
4. *2-Hour serum insulin*
5. *Body mass index*
   
## Mean/Median/Mode Imputation
In this method, any missing value is replaced with the mean/median/mode of the column. This is easiest to implement and comprehend.

## Regression Imputation
This approach replaces missing values with a predicted value based on a regression line.
>**Regression is a statistical method which shows the relationship between a dependent variable and independent variables. It's expressed as y = mx + b where m is the slope, b is a constant, x is the independent variable and y is the dependent variable.**


**In our example**, 'Triceps skinfold thickness' is one of the variables where we see some missing values. 

The missing values in this variable can be imputed by using all other variables information as predictors.
**Formula:**

**Work in progress.**