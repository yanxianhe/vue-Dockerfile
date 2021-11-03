# nginx:1.17.2

#### 制作docker 镜像基于 nginx:1.17.2
> 需要一个安装docker 机器可以上互联网,也可借助registry.hub.docker.com构建[已经收费了]

#### 快速构建dockerfile

* 创建一个空白的文件夹,文件创建 Dockerfile文件、把vue项目build (npm run build) 打包后复制dist 文件   放到同一个文件夹下;
* 注意 dist 替换成自己项目;
* 根据自己需求修改 nginx.conf
~~~~~~
git clone https://github.com/yanxianhe/vue-Dockerfile.git

cd vue-Dockerfile

~\vue-Dockerfile>ls
Dockerfile  README.md  dist nginx.conf

docker build -t my_vue:v1.0.0 .

docker run --name my_vue -p 8080:80  -d my_vue:v1.0.0

~~~~~~

* 使用浏览器访问 http://127.0.0.1:8080/
