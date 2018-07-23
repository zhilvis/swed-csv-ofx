FROM openjdk:8u171

RUN useradd -ms /bin/bash boot
     
RUN curl -s -L https://github.com/boot-clj/boot-bin/releases/download/latest/boot.sh -o /usr/local/bin/boot && \
    chmod +x /usr/local/bin/boot

WORKDIR /home/boot
USER boot
COPY . /home/boot/
RUN boot build && boot serve
CMD boot host