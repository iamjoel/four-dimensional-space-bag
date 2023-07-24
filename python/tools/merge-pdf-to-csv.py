import os
from PyPDF2 import PdfReader
import csv

# 放 pdf 的目录
pdfFileDirectory = 'files'

# 读取目录下的文件


def getFileNames(directory):
    fileNames = os.listdir(directory)
    return fileNames

# 读 pdf 文件 https://pypi.org/project/PyPDF2/


def readPdf(filePath):
    reader = PdfReader(filePath)
    number_of_pages = len(reader.pages)
    text = ''
    i = 0
    while (i < number_of_pages):
        page = reader.pages[i]
        text = text + page.extract_text()
        i = i + 1
    return text.replace('\n', '')

# 写到 csv


def writeToCSV(arr):
    with open('res.csv', 'w', newline='') as csvfile:
        res = csv.writer(csvfile)
        res.writerow(['查询内容'])
        for item in arr:
            res.writerow([item])


# 运行
# 1 读所有pdf的文件名
files = getFileNames(pdfFileDirectory)

# 2 读 pdf
filesContent = []
for fileName in files:
    filesContent.append(readPdf(pdfFileDirectory + '/' + fileName))

# 3 写入 csv
writeToCSV(filesContent)
