(set-env!
  :dependencies '[[adzerk/boot-cljs          "2.1.4"]
                  [adzerk/boot-reload        "0.4.11"]
                  [adzerk/boot-cljs-repl     "0.1.9"]
                  [hoplon/boot-hoplon        "0.2.2"]
                  [hoplon/hoplon             "6.0.0-alpha16"]
                  [com.andrewmcveigh/cljs-time  "0.5.0-alpha2"]
                  [org.clojure/clojure       "1.8.0"]
                  [org.clojure/clojurescript "1.9.93"]
                  [pandeiro/boot-http  "0.7.3"]]

  :source-paths #{"src" "test"}
  :resource-paths  #{"assets"})

(require
  '[adzerk.boot-cljs         :refer [cljs]]
  '[adzerk.boot-cljs-repl    :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload       :refer [reload]]
  '[hoplon.boot-hoplon       :refer [hoplon prerender]]
  '[pandeiro.boot-http :refer [serve]])

(deftask dev
  "Build sign-widget for local development."
  []
  (comp
    (watch)
    (speak)
    (hoplon)
    (reload)
    (cljs-repl)
    (cljs)
    (serve :port 8001)))

(deftask build
  "Build sign-widget for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (target :dir #{"target"})))

(deftask host
  "serve app in heroku"
  []
  (set-env!
    :resource-paths #{"target"})
  (comp
    (serve :port (Integer. (get (System/getenv) "PORT" 8000)))
    (wait)))


