package bikegame

import grails.converters.JSON
import java.lang.Math.*



class JsonController {

    def index() {
        def baum = new Thing( longitude: 81.22, latitude: 23.123, objectName: "Buchsbaum")
        print Thing.list().dump()

        render(contentType: "text/json") {
            Thing.list()
        }
    }
    def mockData() {
//        def list = Thing.list()
        print params.dump()

        def query = Thing.where {
            latitude <= (params.float("x") + params.float("radius")) &&
            latitude >= (params.float("x") - params.float("radius")) &&
            longitude <= (params.float("y") + params.float("radius")) &&
            longitude >= (params.float("y") - params.float("radius"))
        }
//        def query = Thing.where {
//            Math.pow(latitude, 2) + Math.pow(longitude, 2) <= params.float("radius")
//        }
        def list = query.findAll()

        List<Thing> returnList =[]

        list.each() { Thing single ->
            if (Math.sqrt(Math.pow(single.latitude - params.float("x"), 2) + Math.pow(single.longitude - params.float("y"), 2)) <= params.float("radius")) {
                returnList.add(single)
            }
        };


        def ajaxData = [
                longitude: params.x,
                latitude: params.y,
                thingList: returnList]

        def kartoffel = [world: [ajaxData]]

        print list.dump()

        render ajaxData as JSON
    }
}
