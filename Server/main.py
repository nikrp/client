from youtube_transcript_api import YouTubeTranscriptApi
import pathlib
import textwrap
import os
import google.generativeai as genai
import re
from youtube_api import YouTubeDataAPI
import json
import flask

from flask import Flask,request,render_template
app = Flask(__name__)

a_funny_key = os.environ['api_key']
a_even_more_funny_key = os.environ['api_key2']





# transcript = YouTubeTranscriptApi.get_transcript(video_id='8BxVi6YiicQ&t=761s')
# test = ""


# for something in transcript:
#   test+=something["text"] + " "

# genai.configure(api_key="a_funny_key")
# model = genai.GenerativeModel('gemini-pro')

# response = model.generate_content("I have the transcript of a YouTube video. Can you generate 4 thought-provoking questions based on the content of the transcript? Here is the transcript' "+test)
# print(response.text)
# 8BxVi6YiicQ&t=761s
#AIzaSyDDwsUaVhITV-SABYDj69H6m3slQ_OAh8M
@app.route('/')
def index():
    return render_template("form.html")

@app.route('/', methods = ['POST'])
def post_bruh():
  print("YOU ARE POSTING WOOOHOOOO")
  print(request.body)
  text = request.form['text']
  id = text.find("v")
  print(text[id+2:len(text)])
  transcript = YouTubeTranscriptApi.get_transcript(video_id=text[id+2:len(text)])
  test = ""


  for something in transcript:
    test+=something["text"] + " "

  genai.configure(api_key=a_funny_key)
  model = genai.GenerativeModel('gemini-pro')

  response = model.generate_content("I have the transcript of a YouTube video. Generate 4 multiple choice questions based on the content of the transcript which require some degree of familiarity with the subject slightly beyond the knowledge/information presented in the video transcript. Think of it like a school test. Format it as a dictionary, with the question as the key and the value as a list of options. Here is an example of how it should work: {'What is 5+5?': ['10', '8', '7','2']}. This is an example of how it should NOT output: {'Question 1': ['What is 5+5', '10', '8', '7', '2']} Make the first item in the list the right answer to the question. Remember that the question should NOT be contained within the list, the question is the key. This JSON will be pasted directly into code so make it as accurate as possible. Here is the transcript "+test)


  return response.text
@app.route("/actualPost", methods = ['POST'])
def something():
  text = request.data.decode("utf-8")
  print("herereorkejrsjifjdjsfjdis")
  print(text)
  id = text.find("v")
  print(text[id+2:len(text)])
  try:
    transcript = YouTubeTranscriptApi.get_transcript(video_id=text[id+2:len(text)])
  except:
    print("YO why this app not working")
    return "Nothing"
  test = ""


  for something in transcript:
    test+=something["text"] + " "

  genai.configure(api_key=a_funny_key)
  model = genai.GenerativeModel('gemini-pro')

  response = model.generate_content("I have the transcript of a YouTube video. Can you generate 4 multiple questions based on the content of the transcript with little to no prior knowledge on the subject? Think of it like a school test. Format it as a JSON, with the question as the key and the value as a list of options. Make the first item in the list the right answer. Here is the transcript' "+test)
  
  formattedString = response.text[response.text.find("{"):response.text.find("}")+1]
  print(formattedString)
  dictio = json.loads(formattedString)
  print(dictio)
  print(type(dictio))
  response1 = flask.jsonify(dictio)
  response1.headers.add('Access-Control-Allow-Origin', '*')
  return response1
@app.route('/find', methods = ['GET'])
def find():
  return render_template("find.html")

@app.route('/find', methods = ['POST'])
def find_something():
  text = request.form['text']

  yt = YouTubeDataAPI(key="AIzaSyDDwsUaVhITV-SABYDj69H6m3slQ_OAh8M")

  aVeryFunnyList = yt.search(text)

  print(aVeryFunnyList)

  aListOfLinks = []

  theIncredibleVariable = 4

  if(len(aVeryFunnyList) < 4): 
    theIncredibleVariable =len(aVeryFunnyList)
  for i in range(theIncredibleVariable):
    aListOfLinks.append("https://www.youtube.com/watch?v=" + aVeryFunnyList[i]["video_id"])
  return aListOfLinks

@app.route('/findTwo', methods = ['POST'])
def find_something2():
  text1 = request.data.decode('utf-8')
  text = json.loads(text1)["text"]

  yt = YouTubeDataAPI(key="AIzaSyDDwsUaVhITV-SABYDj69H6m3slQ_OAh8M")

  aVeryFunnyList = yt.search(text)

  aListOfLinks = []

  theIncredibleVariable = 4

  if(len(aVeryFunnyList) < 4): 
    theIncredibleVariable =len(aVeryFunnyList)
  for i in range(theIncredibleVariable):
    aListOfLinks.append("https://www.youtube.com/watch?v=" + aVeryFunnyList[i]["video_id"])
  response1 = flask.jsonify(aListOfLinks)
  response1.headers.add('Access-Control-Allow-Origin', '*')
  return response1
  
  
  
if __name__ == '__main__':
  app.run(host='0.0.0.0', port=80)