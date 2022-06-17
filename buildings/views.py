from django.shortcuts import render

# Create your views here.
# rest_framework imports
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, ValidationError

#  custom imports
from .models import Building 
from .serializers.common import BuildingSerializer
# from .serializers.populated import PopulatedBuildingSerializer

# import permissions
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.
class BuildingListView(APIView):
    permissions_classes = (IsAuthenticatedOrReadOnly, )

    # ENDPOINTS & METHODS: 
    # GET all /buildings
    # POST /buildings/

    def get(self, _request):
      buildings = Building.objects.all()
      serialized_buildings = BuildingSerializer(buildings, many=True)
      print('serialized data -->', serialized_buildings.data)
      return Response(serialized_buildings.data, status=status.HTTP_200_OK)

    # POST - Add a new building to the database
    def post(self, request):
        deserialized_building = BuildingSerializer(data=request.data)
        try:
            deserialized_building.is_valid(True)
            deserialized_building.save()
            return Response(deserialized_building.data, status.HTTP_201_CREATED)
        except ValidationError:
          print(deserialized_building.errors)
          return Response(deserialized_building.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)          
        except Exception as e:
            print(type(e))
            print(e)
            return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)


# ENDPOINT: /buildings/:pk/
class BuildingDetailView(APIView):

    # CUSTOM FUNCTION
    # Purpose of this function is to attempt the find a specific building returning that building, and throwing a 404 if failed
    def get_building(self, pk):
        try:
            # pk= is us detailing that we want to look in whatever column is the PRIMARY KEY column
            # the second pk is the captured value
            # this is the same as saying in SQL: WHERE id = 1
            return Building.objects.get(pk=pk)
        except Building.DoesNotExist as e:
            print(e)
            raise NotFound({ 'detail': str(e) })

    # GET - Return 1 item from the buildings table
    def get(self, _request, pk):
        building = self.get_building(pk)
        print('single building --->', building)
        serialized_building = BuildingSerializer(building)
        return Response(serialized_building.data, status.HTTP_200_OK)

    # DELETE - Take the pk from the data capture and find the building, deleting if we find it
    def delete(self, _request, pk):
        print('PK ->', pk)
        building_to_delete = self.get_building(pk)
        building_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    # PUT - This function will update the existing record with new data
    def put(self, request, pk):
        building_to_update = self.get_building(pk=pk)
        print(type(building_to_update))
        deserialized_building = BuildingSerializer(building_to_update, request.data)
        try:
            deserialized_building.is_valid()
            deserialized_building.save()
            return Response(deserialized_building.data, status.HTTP_202_ACCEPTED)
        except Exception as e:
            print(e)
            return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)