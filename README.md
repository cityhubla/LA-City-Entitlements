# LA-City-Entitlements
Extracting Entitlements from PDFs sent by the [LA City Early Notification System](http://parc3.lacity.org/ens/)
Method using Excel Macros, (Still learning python)

Compiling all the entitlement permits from 2003 to 2015 as raw data for data analysis and visualization

The PDFs contain the following categories:

  * Application Date
  * Case Number
  * Address
  * Council District
  * Community Plan Area
  * Project Description
  * Request Type
  * Applicant Contact

From these sources:

  * Los Angeles, CA (planning.lacity.org)

#Open Source Mapping Tools Used
This map is developed using open source web tools like:

 * [QGIS](www.qgis.org) | Open Source Geographic Information System
 * [Mapbox Studio](https://www.mapbox.com/)| Load and upload spatial data to mapbox servers
 * [mapboxGL.js](https://www.mapbox.com/blog/mapbox-gl/) | Web framework to create a responsive map
 * [tilehut server](https://github.com/b-g/tilehut) | A place to host spatial data converted to mbtiles for use by mapboxgl
 
#Explorations
Outcomes for this project 
* Learn how to use mapboxgl and its features utilizing a cloud-based tileserver and tiles served by Mapbox. 
* Study the entitlement process in land use development at the City of Los Angeles.
* Develop and test various visualiztions of how best to convey development in the city.
* Turn this into a tutorial for those interested in making their own maps on their own, with the amazing group called [Maptime!](wwww.maptime.io) and LA's very own chapter [maptimeLA!](https://twitter.com/MAPTIMELA)

#Known Issues
* Many developments submit multiple requests for entitlements. The geocoded addresses resulted in overlapping markers of request types for the same development.

#Glossary
*  **Entitlement** | Approval from a regulatory body to use or develop land ("Land Use, Zoning & Entitlement In Real Estate", Ploutus Advisors, [LINK](http://www.slideshare.net/adnantapia/land-use-zoning-entitlement-45244604)
