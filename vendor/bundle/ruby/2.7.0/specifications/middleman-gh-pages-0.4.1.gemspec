# -*- encoding: utf-8 -*-
# stub: middleman-gh-pages 0.4.1 ruby lib

Gem::Specification.new do |s|
  s.name = "middleman-gh-pages".freeze
  s.version = "0.4.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Adam McCrea".freeze]
  s.date = "2019-01-02"
  s.description = "Easy deployment of Middleman sites to Github Pages".freeze
  s.email = ["adam@adamlogic.com".freeze]
  s.homepage = "https://github.com/edgecase/middleman-gh-pages".freeze
  s.rubygems_version = "3.1.6".freeze
  s.summary = "Easy deployment of Middleman sites to Github Pages".freeze

  s.installed_by_version = "3.1.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<rake>.freeze, ["> 0.9.3"])
  else
    s.add_dependency(%q<rake>.freeze, ["> 0.9.3"])
  end
end
