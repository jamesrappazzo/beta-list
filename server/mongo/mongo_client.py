from mongoengine import connect
class Connect(object):
    @staticmethod    
    def connect(table="test", username="superuser", password="Seltzer123#", authentication_source="admin"):
        # return MongoClient("mongodb://superuser:Seltzer123#@localhost:27017/admin?authSource=admin")
        connect('test', username='superuser', password='Seltzer123#', authentication_source='admin')