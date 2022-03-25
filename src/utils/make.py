# File to be in folowing format only
# <class name> <tab> <classes property ending with semi colon>
# example:
# px-0	padding-left: 0px;padding-right: 0px;
# py-0	padding-top: 0px;padding-bottom: 0px;
# pt-0	padding-top: 0px;
# pr-0	padding-right: 0px;
# pb-0	padding-bottom: 0px;
# pl-0  padding-left: 0px;


import sys
import re
import os


def create_class(filename, classname, props):
    return(".{0} {{ \n {1} \n }} \n". format(
        classname, props))


def main(filename):
    print("--------------reading {}--------------".format(filename))
    file = open(filename, "r+")
    file_read_content = file.read()
    file_read_content = os.linesep.join(
        [s for s in file_read_content.splitlines() if s])
    file.truncate(0)
    print("-----------done reading {}------------".format(filename))
    print("--------------writing {}--------------".format(filename))
    file = open(filename, "w")

    count = 0
    expection_list = []
    for cls in file_read_content.split("\n"):
        try:
            [classname, props] = re.split(r'\t+', cls)
            file.write(create_class(filename, classname, props))
            count = count + 1
        except:
            expection_list.append(cls)
    file.seek(0, 0)
    for item in expection_list:
        file.write("%s\n" % item)
    file.close()
    print("-----------done writing {}------------".format(filename))
    print("-----------{}/{} classes added-----------".format(count,
          len(file_read_content.split("\n"))))


if __name__ == "__main__":
    main(sys.argv[1])
