1.Build iamges.
docker-compose build
2.Start container.
docker-compose up -d
3.Port is 9000
4.For testing, you should post data firstly. Every page has special endpoit.
  For example, filed_information page connect to filedId=1.

PS:
http://localhost:9000/#/rotation has not get data yet.
http://localhost:9000/#/field_information  is missing meteoData.
