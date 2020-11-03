var app = angular.module('cv', []);

function CVTemplateCtrl($scope, $http) {
	$http({
		url: "data/cv.json",
		method: "GET",
		data: {}
	}).success(function(data, status, headers, config) {
		$scope.personalData = data.personalData;
		$scope.skills = data.skills;
		$scope.educations = data.educations;
		$scope.workExperience = data.workExperience;
		$scope.certificates = data.certificates;
		$scope.projects = data.projects;
	}).error(function(data, status, headers, config) {
		$scope.status = status;
	}); 
};

app.directive("checkLast", function () {
	return {
		restrict: 'A',
		replace: false,
		link: function(scope, element, attrs) {
			if (scope.$last=== true) {
				var $doc = $(document), Modernizr = window.Modernizr;
				$.fn.foundationAccordion ? $doc.foundationAccordion() : null;
			}
		},
	};
});

app.directive("date", function (dateFilter) {
	return {
		restrict: 'E',
		replace: false,
		link: function(scope, element, attrs) {
			var dateFormat = 'MMM yyyy';

			scope.$watch(attrs.date, function(value) {
				if(value != ''){
					var date = new Date(value);
					element.text(dateFilter(date, dateFormat));
				}
				else {
					element.text("Present");
				}
			});
		},
	};
});