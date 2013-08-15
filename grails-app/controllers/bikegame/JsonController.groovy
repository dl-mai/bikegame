package bikegame

import grails.converters.JSON


class JsonController {

    def index() {
        def baum = new Thing( longitude: 81.22, latitude: 23.123, objectName: "Buchsbaum")
        print Thing.list().dump()

        render(contentType: "text/json") {
            Thing.list()
        }
    }
    def mockData() {

        def ajaxData = [
                longitude: params.x,
                latitude: params.y,
                thingList: Thing.list()]

        def kartoffel = [world:[ajaxData]]

        Thing.list().dump()
        render kartoffel as JSON
    }
}
