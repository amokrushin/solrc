```bash
docker run -d -p 8983:8983 --name solrc_example solr solr-foreground -cloud
docker stop solrc_example && docker rm solrc_example
```
