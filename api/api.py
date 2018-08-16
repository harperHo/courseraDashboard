from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import sqlite3

# db_connect = sqlite3.connect('Mooc.sqlite')
# cur = db_connect.cursor()
app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
app.config['JSON_SORT_KEYS'] = False
api = Api(app)

class course(Resource):
    def get(self):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('course')")]
        query = cur.execute("select * from course").fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)


class course_id(Resource):
    def get(self, id):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('course')")]
        query = cur.execute("select * from course where id=%d" % int(id)).fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)


class total_passrate_course_level(Resource):
    def get(self):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_passrate_course_level')")]
        query = cur.execute("select * from total_passrate_course_level").fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)


class total_passrate_course_level_id(Resource):
    def get(self, id):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_passrate_course_level')")]
        query = cur.execute("select * from total_passrate_course_level where id=%d" % int(id)).fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)


class total_passrate_item_level(Resource):
    def get(self):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_passrate_item_level')")]
        query = cur.execute("select * from total_passrate_item_level").fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)


class total_passrate_item_level_id(Resource):
    def get(self, id):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_passrate_item_level')")]
        query = cur.execute("select * from total_passrate_item_level where id=%d" % int(id)).fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)


class total_rating_course_level(Resource):
    def get(self):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_rating_course_level')")]
        query = cur.execute("select * from total_rating_course_level").fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)


class total_rating_course_level_id(Resource):
    def get(self, id):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_rating_course_level')")]
        query = cur.execute("select * from total_rating_course_level where id=%d" % int(id)).fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)


class total_rating_item_level(Resource):
    def get(self):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_rating_item_level')")]
        query = cur.execute("select * from total_rating_item_level").fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)


class total_rating_item_level_id(Resource):
    def get(self, id):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_rating_item_level')")]
        query = cur.execute("select * from total_rating_item_level where id=%d" % int(id)).fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)


class total_register_course_level(Resource):
    def get(self):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_register_course_level')")]
        query = cur.execute("select * from total_register_course_level").fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)


class total_register_course_level_id(Resource):
    def get(self, id):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_register_course_level')")]
        query = cur.execute("select * from total_register_course_level where id=%d" % int(id)).fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)

class total_register_item_daily_level(Resource):
    def get(self):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_register_item_daily_level')")]
        query = cur.execute("select * from total_register_item_daily_level").fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)

class total_register_item_daily_level_id(Resource):
    def get(self, id):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_register_item_daily_level')")]
        query = cur.execute("select * from total_register_item_daily_level where id=%d" % int(id)).fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)

class total_register_item_weekly_level(Resource):
    def get(self):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_register_item_weekly_level')")]
        query = cur.execute("select * from total_register_item_weekly_level").fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)

class total_register_item_weekly_level_id(Resource):
    def get(self, id):
        cur = sqlite3.connect('Mooc.sqlite').cursor()
        header = [i[1] for i in cur.execute("PRAGMA table_info('total_register_item_weekly_level')")]
        query = cur.execute("select * from total_register_item_weekly_level where id=%d" % int(id)).fetchall()

        result = []

        for record in query:
            tmp = dict()
            for j, item in enumerate(record):
                tmp[header[j]] = item
            result.append(tmp)

        return jsonify(result)


api.add_resource(course, '/course/')
api.add_resource(course_id, '/course/<id>')

api.add_resource(total_passrate_course_level, '/total_passrate_course_level/')
api.add_resource(total_passrate_course_level_id, '/total_passrate_course_level/<id>')
api.add_resource(total_passrate_item_level, '/total_passrate_item_level/')
api.add_resource(total_passrate_item_level_id, '/total_passrate_item_level/<id>')

api.add_resource(total_rating_course_level, '/total_rating_course_level/')
api.add_resource(total_rating_course_level_id, '/total_rating_course_level/<id>')
api.add_resource(total_rating_item_level, '/total_rating_item_level/')
api.add_resource(total_rating_item_level_id, '/total_rating_item_level/<id>')

api.add_resource(total_register_course_level, '/total_register_course_level/')
api.add_resource(total_register_course_level_id, '/total_register_course_level/<id>')
api.add_resource(total_register_item_daily_level, '/total_register_item_daily_level/')
api.add_resource(total_register_item_daily_level_id, '/total_register_item_daily_level/<id>')
api.add_resource(total_register_item_weekly_level, '/total_register_item_weekly_level/')
api.add_resource(total_register_item_weekly_level_id, '/total_register_item_weekly_level/<id>')


if __name__ == '__main__':
    app.run(port='5555')