# Content: Recommendation System
## Project: Movie Recommendation

### Install

This project requires **Python 3.5** and the following Python libraries installed:

- [NumPy](http://www.numpy.org/)
- [Pandas](http://pandas.pydata.org)
- [matplotlib](http://matplotlib.org/)
- [scikit-learn](http://scikit-learn.org/stable/)
- [scikit-surprise](http://surpriselib.com/)

You will also need to have software installed to run and execute a [Jupyter Notebook](http://ipython.org/notebook.html)

If you do not have Python installed yet, it is highly recommended that you install the [Anaconda](http://continuum.io/downloads) distribution of Python, which already has the above packages and more included. Make sure that you select the Python 2.7 installer and not the Python 3.x installer. 

### Code

Template code is provided in the `Recommendation.ipynb` notebook file. 

### Run

In a terminal or command window, navigate to the top-level project directory `Movie Recommendation/` (that contains this README) and run one of the following commands:

```bash
ipython notebook recommendation.ipynb
```  
or
```bash
jupyter notebook recommendation.ipynb
```

This will open the Jupyter Notebook software and project file in your browser.

## Data

The Movie Recommendation data is included from MovieLens which has 26,000,000 ratings and 750,000 tag applications applied to 45,000 movies by 270,000 users. Includes tag genome data with 12 million relevance scores across 1,100 tags. Last updated 8/2017.  [MovieLens](https://grouplens.org/datasets/movielens/).

Note (m.u.) is shorthand for *monetary units*.

You can download the dataset extract ratings.csv and movies.csv and put it in the same extracted folder to run the code.

`http://files.grouplens.org/datasets/movielens/ml-latest.zip`

**Features**
1) `Movie Id`
2) `User Id`
3) `Rating`
4) `Movie Genre`
5) `Movie Name`
6) `tags`


## Website
`There a folder website where you can fill the form and let the model understand your likes and 
get your recommendations.`

## Usage

1) `Run the python code and you will start a server in the python.`
2) `Go to the form page and then after selecting 10 and above movies with respective ratings you can submit the form.`
3) `You will get the movie recommendations back.`

